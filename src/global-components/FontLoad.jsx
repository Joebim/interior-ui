import React, { useState, useEffect } from 'react'
import Arquitecta from "../assets/fonts/Arquitecta.otf"
import ArquitectaBlack from "../assets/fonts/ArquitectaBlack.otf"
import ArquitectaBold from "../assets/fonts/ArquitectaBold.otf"
import ArquitectaBook from "../assets/fonts/ArquitectaBook.otf"
import ArquitectaHeavy from "../assets/fonts/ArquitectaHeavy.otf"
import ArquitectaLight from "../assets/fonts/ArquitectaLight.otf"
import ArquitectaMedium from "../assets/fonts/ArquitectaMedium.otf"
import ArquitectaThin from "../assets/fonts/ArquitectaThin.otf"



export default function FontLoad() {

const fonts = [
    {family:"Arquitecta", font: Arquitecta, style: "normal"},
    {family:"ArquitectaBlack", font: ArquitectaBlack, style: "black"},
    {family:"ArquitectaBold", font: ArquitectaBold, style: "bold"},
    {family:"ArquitectaBook", font: ArquitectaBook, style: "book"},
    {family:"ArquitectaHeavy", font: ArquitectaHeavy, style: "extra-bold"},
    {family:"ArquitectaLight", font: ArquitectaLight, style: "light"},
    {family:"Arquitecta", font: ArquitectaMedium, style: "medium"},
    {family:"ArquitectaThin", font: ArquitectaThin, style: "thin"}
]

    useEffect(() => {

        fonts.forEach((font) => {
            var fontss = new FontFace(font.family, `url(${font.font})`, {
            style: font.style, weight: '400'
        });


        // don't wait for the render tree, initiate an immediate fetch!
        fontss.load().then(function (loaded_face) {
            // apply the font (which may re-render text and cause a page reflow)
            // after the font has finished downloading 

            document.fonts.add(loaded_face);
            // document.body.style.fontFamily = `Edensor, serif`;

            // console.log("document",document.body.style.fontFamily)

            // OR... by default the content is hidden,
            // and it's rendered after the font is available

            // var content = document.getElementById(`text${index}`);
            // content.style.visibility = "visible";
            // content.style.fontFamily = `${font.family}`


            // OR... apply your own render strategy here...
        }).catch(function (err) {
            console.log('error', err)
        });


    })
        })

        

}