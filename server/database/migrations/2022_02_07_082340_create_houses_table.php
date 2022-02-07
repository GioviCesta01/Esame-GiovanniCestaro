<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHousesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('houses', function (Blueprint $table) {
            $table->id();
            $table->text('name')->nullable();
            $table->text('img')->nullable();    
            $table->text('city')->nullable();
            $table->text('province')->nullable();
            $table->text('address')->nullable();
            $table->float('CAP')->nullable();
            $table->float('number_apartment')->nullable();
            $table->float('consumption')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('houses');
    }
}
