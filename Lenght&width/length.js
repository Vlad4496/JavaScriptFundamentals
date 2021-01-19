for (let w = 0; w <= 11; w++) {
    document.write("<br>")
    for(let h = 0; h<=21; h++)
    {
        if ((w==0) || (h==0) || (w==11) || (h==21)) {
            document.write("#")
        } else {
            document.write("0")
        }
    }
}   