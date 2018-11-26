
# Pokemon let's go xp mod percentage changer

## DESCRIPTION
This is a web aplication that allows to compare 2 "personal_total.bin" whit diferent percentage values for the xp
provided by wild pokemon in pokemon let's go and allows you to generate a new "personal_total.bin" whit the 
percentage that you want from 0% to 255%.

## INSTRUCTIONS

### Introduction
When you open the web aplication you see that there are 4 fields of input, the firws, "file 1 percentage", "new percentage" File1 and File2, and bellow that there is a Result field.  
For using this web aplication you would need 2 personal_total.bin whit diferent percentages for the Experience, once you have them on your computer we can continue.

  ### 1. Upload File 1 
We are going to upload one personal_total.bin to the File 1 field.  

To do it you can click the UPLOAD button bellow the File 1 text area, on the left side of the UPLOAD button will be written "Upload File 1!", the UPLOAD button that has that written to the left is the one that you should click to upload a personal_total.bin to the file 1 field.  
On the other hand, you can also open the personal_total.bin in a hex editor like HxD, select all, copy it and paste it on the file 1's Text Box.  

Either way it works, but i suggest to simply using the UPLOAD button science it is safer and less troublesome.  
You can adquire the personal_total.bin file by extracting the files of Pokemon let's go Eevee or let's go Pikachu, its inside "romfs\bin\pokelib\personal\".  
You can also get one from Dio Vento's Pokemon let's go standalone mods Altered Experience Gain, there are 3 of them, one whit 60%, other for co-op whit 35% and other for endgame whit 200%, apart from those you can also get one in Dio Vento's Pokemon let's go Polished Pikachu and Enhanced Eevee mod, that one being 75%.  

You can upload any personal_total.bin, it does not matter which one, but be sure to remember which one you uploaded because is going to be important on the next step.

  ### 2. Select File 1 Percentage
Now we are going to go to the "File 1 Fercentage" field.  
When you click on it a dropdown menu would appear with different percentages ranging from 0% to 255%.  
You are supposed to select the percentage that corresponds to the personal_total.bin you uploaded to File 1 in the previous step.  
I think it's pretty obvious which percentage corresponds to each personal_total.bin, but just in case I'm going to put a reference table so you know what percentage corresponds to each personal_total.bin.

Origin of the file 1 personal_total.bin | Percentage you should select on File 1 Percentage 
------------ | -------------
Extracted from base game | 100%
Dio Vento's Pokemon lets go Polished Pikachu and Enhanced Eevee mod | 75%
Dio Vento's standalone Pokemon lets go mods Altered Experience Gain 60% | 60%
Dio Vento's standalone Pokemon lets go mods Altered Experience Gain 35% Co-op | 35%
Dio Vento's standalone Pokemon lets go mods Altered Experience Gain 200% Post Game Grinding | 200

  ### 3. Upload File 2  
This step is going to be relatively easy to explain.  

Now you are supposed to upload another "personal_total.bin", this time on the File 2 field, this field works exactly like the File 1's field, there is a Text Box and bellow it a UPLOAD button that on the left side of it will be written "Upload File 2!".  
Like you had done in the first step, you can choose betwen just uploading whit the button or going through the troublesome process of copy paste with a hex editor.  

In this step you have to upload a "personal_total.bin" that has a different percentage than the one you uploaded in step 1, you can read again step 1 to know where to obtain "personal_total.bin" files, but it is very important that the one you upload in this step is a different "personal_total.bin" from the one you uploaded on step 1.  
For example, if on step 1 you uploaded a "personal_total.bin" extracted from the base game, on this step you should upload a "personal_total.bin" obtained from one of Dio Vento's mods, or another example, if on step 1 you uploaded the "personal_total.bin" from the Dio Vento's Altered Experience Gain 60% mod, on this step you should upload for example Dio Vento's Altered Experience Gain 35% Co-op mod "personal_total.bin".  
I will assume that I have made it clear enough.

summary of this step: upload a "personal_total.bin" other than that you uploaded in step 1.

  ### 4. Select a NEW Percentage

## LINK TO USE THE TOOL

You can use it at: https://www.aitor-sama.es


## CREDITS

-Me for creating the tool

-https://github.com/mgreter/sass.link.js for:

sass.link.src.js	

sass.link.worker.src.js

-https://github.com/eligrey/FileSaver.js/ for:

FileSaver.min.js

-https://www.freefavicon.com/freefavicons/icons/iconinfo/gear-icon-152-213252.html for the favicon

-https://purecss.io for part of the css 

-https://fontawesome.com for some icons

CodeSandbox because i coded the thing in codesandbox.
