<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CatalogImages extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'image',
        'catalog_id'
    ];
    
    protected $table = 'catalog_images';
    
}
