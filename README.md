
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
If you go whit the upload button option, a Hexadecimal string representing the "personal_total.bin" you uploaded would appear on the File 1 Text box

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
If you go whit the upload button option, a Hexadecimal string representing the "personal_total.bin" you uploaded would appear on the File 2 Text box

summary of this step: upload a "personal_total.bin" other than that you uploaded in step 1.

  ### 4. Select a NEW Percentage
This is a easy step, like on step 2 you are going to deal whit a dropdown menu when you click "the New Percentage" field, and like the one in step 2 this menu is going to contain different percentages ranging from 0% to 255%.

You only need to select the percentage that you want, the percentage you select on this menu is going to become the percentage of experience you recive after catching Pokemon compared to the base game values, for example, if on the base game whitout mods you gain 200xp from catching a certain pokemon, and you select in this menu 230% you would then gain 460xp from that same pokemon, or if you select 67% you would gain 134xp.  
Im going to suppose that everyone understands, is pretty easy, you select the percentage you want.

  ### 5. Generate
On this step you only need to do one thing, after you filled all 4 fields on the previous step you just click the "Generate" button, and on the third text box a Hexadecimal string would appear, that Hexadecimal string corresponds to the new "personal_total.bin" generated whit the percentage you wanted, now you can jump to the next step, but if you want to go whit hex editor option you can continue reading this step, altrought its not recommended to go whit the hex editor option.  
Select all inside the third text box, copy it, paste it on a hex editor like HxD and save it as "personal_total.bin", if you done this you can ignore step 6 and go directly to step 7, as the next step just downloads the "personal_total.bin" to the computer if you did not wanted to use a hex editor.

 ### 6. Download
This is by far the easier step, just click the download button, and the "personal_total.bin" whit the percentage you selected would be downloaded to your computer/device.

 ### 7. Put the file on the correct place
Finally you just need to put the file in the right directory, and that one would be:  

Game | Directory 
------------ | -------------
Pokemon Let's Go, Pikachu! | SD:\atmosphere\titles\010003F003A34000\romfs\bin\pokelib\personal
Pokemon Let's Go, Eevee! | SD:\atmosphere\titles\010003F003A36000\romfs\bin\pokelib\personal 


## LINK OF THE TOOL

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
