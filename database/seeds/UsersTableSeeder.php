<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'id' => 1,
            'password' => bcrypt('11111111'),
            'name' => 'Stylist1',
            'email' => 'Stylist1@gmail.com',
            'age' => 22,
            //0→女, 1→男
            'sex' => 0,
            //stylist or normal
            'role' => 'stylist',
        ]);
    }
}
