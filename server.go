package main

import (
	"fmt"
	"net/http"
)

func ServePDFDoc(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./public/p5/resumeWebsite/index.html")
}

func main() {
	fmt.Println("Servering on Port 8080")
	http.HandleFunc("/", ServePDFDoc)
	if err := http.ListenAndServe(":8080", nil); err != nil {
		panic(err)
	}
}