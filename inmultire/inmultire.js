document.write("<section>")
for(i=0; i<15; i++) {
    document.write("<div>")
    for(j=0; j<15; j++) {
        let bucle = i * j
        document.write(i + "x" + j + "=" + bucle + "<br>")
    }
    document.write("<br>")
    document.write("</div>")
}

document.write("</section>")
