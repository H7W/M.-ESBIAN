# Erros corrígidos
_todos os erros que aconteceram durante a criação e/ou execução do projeto. Erros esses já corrígidos e aqui registrados, afim de serem evidados posteriormente_

>
>
> #### 00.00 [err_file_not_found file | file///android/asset/www/index html:1]
>   - causa: endereço relativo referenciado de forma erronia
>   - detalhes: 
> ```html          
>  <!-- errado: -->
>  <link rel="shortcut icon" href="./../res/icon.png" type="image/x-icon">-->
>  <!-- certo: -->
>  <link rel="shortcut icon" href="ASSETS/MIDIA/IMG/logo.png" type="image/x-icon">
> ```
>
---



