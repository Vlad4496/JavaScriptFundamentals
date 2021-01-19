for(w = 0; w < 11; w++) {
    document.write("<br>")
    // document.write(w)
    for(h = 0; h < 21; h++) {
        // document.write(h)
        if(w == 0 || h == 0 || w == 10 || h == 20) {
            document.write("#")
        } else {
            document.write("0")
        }
    }   
}