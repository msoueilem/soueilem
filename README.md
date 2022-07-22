<!-- ---
title: "soueilem"
output: 
  flexdashboard::flex_dashboard:
    orientation: columns
    vertical_layout: fill
    includes:
      in_header: myheader.html
runtime: shiny
---

```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = FALSE )

fileConn <- file("myheader.html")
writeLines('<meta http-equiv="refresh" content="0; url=https://msoueilem.github.io/soueilem/"/>', fileConn)
close(fileConn)
``` -->
<script type="text/javascript">
    go_away = function () {
        location.href = "https://msoueilem.github.io/soueilem/";
    };
</script> 

```{r, echo=F}
shinyjs::useShinyjs(rmd = TRUE)
actionButton("myButton2", "Redirect!!")

observeEvent(input$myButton2, {
  shinyjs::runjs('go_away()')
})

```