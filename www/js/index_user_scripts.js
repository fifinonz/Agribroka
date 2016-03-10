(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
           /* listitem  Login */
    $(document).on("click", ".uib_w_login", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#login_pagesub"); 
    });
        
    
        /* listitem  Register */
    $(document).on("click", ".uib_w_register", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#register_pagesub"); 
    });
    
        /* listitem  Guest Session */
    $(document).on("click", ".uib_w_guest", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_page_home"); 
    });
    

        /* button  Register */
    $(document).on("click", ".uib_w_18", function(evt)
    {
         /*global activate_page */
         activate_page("#register_page"); 
    });


        /* button  Home */
    $(document).on("click", ".uib_w_f_home", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_page_home"); 
    });
    
        /* button  Explore */
    $(document).on("click", ".uib_w_f_explore", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_page_explore"); 
    });
    
        /* button  Activity */
    $(document).on("click", ".uib_w_f_activity", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_page_activity"); 
    });
    
        /* button  Profile */
    $(document).on("click", ".uib_w_f_profile", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_page_profile"); 
    });

 
    

    
    

    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
