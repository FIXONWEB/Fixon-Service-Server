  jQuery(document).ready(function($){
    $(".fixon_modal_start").click(function(e){
      e.preventDefault;
      $("body").append('<div id="fixon_modal_bg"></div>');
      $("body").append('<div class="fixon_modal_box"><a href="#" id="fixon_modal_close">X</a></div>');
      $("#fixon_modal_bg").css("display","block");
      $(".fixon_modal_box").css("top","150px");
      $("#fixon_modal_close").click(function(e){
        $("#fixon_modal_bg").remove();
        $(".fixon_modal_box").remove();
      });
    });
  });
    jQuery(document).ready(function($){
    jQuery(".fixon_combo_ajax").click(function(e){
      e.preventDefault;
      var posicaoo = jQuery(this).offset();
      ret_mnu = "<div></div>";
      jQuery("body").append("<div id=fixon_dvmnuc_mascara></div>");
      jQuery("#fixon_dvmnuc_mascara").css("width","100vw");
      jQuery("#fixon_dvmnuc_mascara").css("height","100vh");
      jQuery("#fixon_dvmnuc_mascara").css("background","rgba(0,0,0,.5)");
      jQuery("#fixon_dvmnuc_mascara").css("position","fixed");
      jQuery("#fixon_dvmnuc_mascara").css("top","0px");
      jQuery("#fixon_dvmnuc_mascara").css("left","0px");
      jQuery("#fixon_dvmnuc_mascara").css("z-index","2000");
      jQuery("#fixon_dvmnuc_mascara").css("display","block");
      jQuery("body").append("<div id=dvmnuc><div>");
      jQuery("#dvmnuc").css("position","absolute");
      jQuery("#dvmnuc").css("top",posicaoo.top);
      jQuery("#dvmnuc").css("left",posicaoo.left);
      jQuery("#dvmnuc").css("z-index","9000");
      jQuery("#dvmnuc").html(ret_mnu);
      jQuery("#dvmnuc").css("display","block");
      jQuery("#dvmnuc").css("padding","10px;");

      jQuery("#dvmnuc").html(ret_mnu);
      jQuery("#dvmnuc").css("display","block");

      var tabela = $(this).attr("data-tabela");
      var campo1 = $(this).attr("data-campo1");
      var campo2 = $(this).attr("data-campo2");
      var target1 = $(this).attr("data-target1");
      var target2 = $(this).attr("data-target2");

      $.ajax({
        url: "/fixon_combo_ajax/",
        data: { 
          tabela : tabela,
          campo1 : campo1,
          campo2 : campo2,
          target1 : target1,
          target2 : target2
        }
      })
      .done(function( html ) {
        jQuery("#dvmnuc").append(html);
        $(".fixon_combo_ajax_item").click(function(){
          $("#"+target1).val($(this).attr("data-campo1"));
          $("#"+target2).val($(this).attr("data-campo2"));
          jQuery("#fixon_dvmnuc_mascara").remove();
          jQuery("#dvmnuc").remove();
        })
      });
      jQuery("#fixon_dvmnuc_mascara").click(function(){
        jQuery(this).remove();
        jQuery("#dvmnuc").remove();
      });
    });
    jQuery(".fixon_botao").click(function(ev){
      // console.log(\'fixon_botao\');
      var sub_menu = $(this).attr("data-sub_menu");
      if(sub_menu) {
        ev.preventDefault;
      }
      // console.log(sub_menu);
      var explode = sub_menu.split("|");
      var ret_mnu = "<ul>";
      for (i = 0; i < explode.length; i++) {
        var itens = explode[i].split(":");
        ret_mnu = ret_mnu + "<li style=list-style:none;><a href=\'"+itens[1]+"\'>"+itens[0]+"</li>";
      }
      ret_mnu += "</ul>";  
      var posicaoo = jQuery(this).offset();
      jQuery("body").append("<div id=fixon_dvmnuc_mascara></div>");
      jQuery("#fixon_dvmnuc_mascara").css("width","100vw");
      jQuery("#fixon_dvmnuc_mascara").css("height","100vh");
      jQuery("#fixon_dvmnuc_mascara").css("background","rgba(0,0,0,.5)");
      jQuery("#fixon_dvmnuc_mascara").css("position","fixed");
      jQuery("#fixon_dvmnuc_mascara").css("top","0px");
      jQuery("#fixon_dvmnuc_mascara").css("left","0px");
      jQuery("#fixon_dvmnuc_mascara").css("z-index","2000");
      jQuery("body").append("<div id=dvmnuc><div>");
      jQuery("#dvmnuc").css("position","absolute");
      jQuery("#dvmnuc").css("top",(posicaoo.top+30));
      jQuery("#dvmnuc").css("left",posicaoo.left);
      jQuery("#dvmnuc").css("background","#ffffff");
      jQuery("#dvmnuc").css("padding","10px");
      jQuery("#dvmnuc").css("box-shadow","5px 5px 5px 1px rgba(0, 0, 0, 0.2)");
      jQuery("#dvmnuc").css("border-radius","10px");
      jQuery("#dvmnuc").css("z-index","9000");
      jQuery("#dvmnuc").html(ret_mnu);
      jQuery("#dvmnuc").css("display","block");
      jQuery("#fixon_dvmnuc_mascara").click(function(){
        // console.log("fixon_dvmnuc_mascara click");
        jQuery(this).remove();
        jQuery("#dvmnuc").remove();
      });
    });
    jQuery(".fixon_col_0").click(function(ev){
      var fixon_col_0 = $(this).attr("data-fixon_col_0");
      var explode = fixon_col_0.split("|");
      var ret_mnu = "<ul>";
      for (i = 0; i < explode.length; i++) { 
        var itens = explode[i].split(":");
        ret_mnu = ret_mnu + "<li style=list-style:none;><a href=\'"+itens[1]+"\'>"+itens[0]+"</li>";
      }
      ret_mnu += "</ul>";
      var posicaoo = jQuery(this).offset();
      jQuery("body").append("<div id=fixon_dvmnuc_mascara></div>");
      jQuery("#fixon_dvmnuc_mascara").css("width","100vw");
      jQuery("#fixon_dvmnuc_mascara").css("height","100vh");
      jQuery("#fixon_dvmnuc_mascara").css("background","rgba(0,0,0,.5)");
      jQuery("#fixon_dvmnuc_mascara").css("position","fixed");
      jQuery("#fixon_dvmnuc_mascara").css("top","0px");
      jQuery("#fixon_dvmnuc_mascara").css("left","0px");
      jQuery("#fixon_dvmnuc_mascara").css("z-index","2000");
      jQuery("body").append("<div id=dvmnuc><div>");
      jQuery("#dvmnuc").css("position","absolute");
      jQuery("#dvmnuc").css("top",posicaoo.top);
      jQuery("#dvmnuc").css("left",posicaoo.left);
      jQuery("#dvmnuc").css("background","rgba(255,255,255)");
      jQuery("#dvmnuc").css("padding","10px");
      jQuery("#dvmnuc").css("border-radius","10px");
      jQuery("#dvmnuc").css("box-shadow","5px 5px 5px 1px rgba(0, 0, 0, 0.2)");
      jQuery("#dvmnuc").css("z-index","9000");
      jQuery("#dvmnuc").html(ret_mnu);
      jQuery("#dvmnuc").css("display","block");
      jQuery("#fixon_dvmnuc_mascara").click(function(){
        jQuery(this).remove();
        jQuery("#dvmnuc").remove();
      });
    });
  });