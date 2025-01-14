<?php 
/**
 * plugin Name: Carrousel
 * Description: Affiche un carrousel d'image controle par des boutons radio
 * Author: annabelle 
 * version: 1.0.0
 */


function eddym_enqueue(){

   $version_css = filemtime(plugin_dir_path( __FILE__ ) . "style.css");
   $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");    

   wp_enqueue_style(   'em_plugin_carrousel_css',
   plugin_dir_url(__FILE__) . "style.css",
   array(),
   $version_css);

   wp_enqueue_script(  'em_plugin_carrousel_js',
   plugin_dir_url(__FILE__) ."js/carrousel.js",
   array(),
   $version_js,
   true); //true permet d'ajouter le script a la fin du document 
}

add_action('wp_enqueue_scripts', 'eddym_enqueue');
/** IMPORTANT
 * wp_header() juste avant la fermeture la balise fermeture </head>
 * 
 * dans footer php
 * wp_footer() juste avant la balise de fermeture </body>
 */

 function genere_html(){
    /////////////////////////////////////// HTML
    // Le conteneur d'une boîte
    
       $contenu = '
       <button class="bouton__ouvrir">Ouvrir</button>
       <div class="carrousel">
       <button class="carrousel__x">X</button>
       <figure class="carrousel__figure"></figure>
       <form class="carrousel__form"></form>
       
       </div>';
       return $contenu;
   
    return $contenu;
   }

add_shortcode('carrousel',"genere_html");