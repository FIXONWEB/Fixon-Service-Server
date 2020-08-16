<?php
/**
 * Plugin Name:     Fixon Service Server
 * Plugin URI:      https://fixon.biz/plugin/fixon-service-server
 * Description:     Estrutura de serviços
 * Author:          Fixon
 * Author URI:      https://fixon.biz/
 * Text Domain:     fixon-service-server
 * Domain Path:     /languages
 * Version:         0.1.5
 *
 * @package         fixon-service-server
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

require 'plugin-update-checker.php';
$myUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
    'https://github.com/fixonweb/Fixon-Service-Server/fixon-service-server.php',
    __FILE__, 
    'Fixon-Service-Server/fixon-service-server'
);

$plugin_file = __FILE__;
// add_action('init', 'fixon_ss_activate_au');
function fixon_ss_activate_au(){
    $current_version = '1.0.0';
    $remote_path = 'https://update.fixon.biz/';
    $slug = plugin_basename(__FILE__);
    $key = "j08uy8j74UFbKwRu";
    new fixon_suporte_update ($current_version, $remote_path, $slug, $key);
}

// add_action( 'wp_enqueue_scripts', 'fixon_ss_enqueue_scripts' );
function fixon_ss_enqueue_scripts() {
    wp_enqueue_style( 'fixon_ss_style', plugins_url( '/css/fixon_ss.css' , __FILE__ ) );
    wp_enqueue_script( 'fixon_ss_js', plugins_url( '/js/fixon_ss.js' , __FILE__ ), array( 'jquery' )  );
}

// add_action( 'parse_request', 'fixon_ss_combo_ajax');
function fixon_ss_combo_ajax( &$wp ) {
  if($wp->request == 'fixon_combo_ajax'){
    $tabela = $_GET['tabela'];
    $campo1 = $_GET['campo1'];
    $campo2 = $_GET['campo2'];
    $target1 = $_GET['target1'];
    $target2 = $_GET['target2'];
    $sql = "select $campo1, $campo2 from ".$GLOBALS['wpdb']->prefix."$tabela limit 0,10";
    $tb = fixon_db_exe($sql,'rows');
    $ret = '';
    foreach ($tb['rows'] as $key => $value) {
      $ret .= '<li><a href="#" data-campo1="'.$value[$campo1].'" data-campo2="'.$value[$campo2].'" class="fixon_combo_ajax_item">'.$value[$campo2].'</a></li>';
    }
    ?>
    <ul style="background: #FFFFFF;">
      <?php echo $ret; ?>
    </ul>
    <?php 
    exit;
  }
}
include_once("includes/utilit.php");
include_once("includes/clientes.php");
include_once("includes/suporte-gn5h7vpaxu.php");  //CAIXAS
include_once("includes/suporte-dtvsovjyd.php");   //FLUXO DE CAIXA
include_once("includes/suporte-l4nxfglp.php");    //CONTAS A RECEBER
include_once("includes/suporte-ttlkwckufd.php");  //CONTAS A PAGAR
include_once("includes/suporte-0wyvcrytn.php");   //BAIXA DE CONTAS A RECEBER
include_once("includes/suporte-u1xkrnhzjh.php");  //BAIXA DE CONTAS A PAGAR
include_once("includes/disable.php");

include_once("includes/suporte-gs4deicnt-autologin.php");
