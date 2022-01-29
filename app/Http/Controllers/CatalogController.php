<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Catalog;
use App\CatalogImages;
use Illuminate\Support\Facades\Storage;

class CatalogController extends Controller
{
    public function store(Request $request, Catalog $catalog, CatalogImages $catalogimages)
    {
        $catalog = Catalog::create([
            'caption' => $request->caption,
            'user_id' => Auth::id()
        ]);
        
        for($i = 0; $i < $request->imageLenght; $i++){
            $photo = $request->images[$i];
            $photo_name = $photo->getClientOriginalName();
            Storage::disk('s3')->putFileAs('catalog/',$photo,$photo_name);
            CatalogImages::create([
                'image' => $photo_name,
                'catalog_id' => $catalog->id
            ]);
        }
        
        $catalogs = Catalog::all();
        return response()->json($catalogs);
    }
    
    public function fetchCatalogs(Catalog $catalog)
    {
        $user = Auth::user();
        $catalogs = $user->catalogs()->with('images')->get();
        return response()->json($catalogs);
    }
}
