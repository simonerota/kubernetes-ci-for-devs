package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func language(w http.ResponseWriter, r *http.Request) {

	fmt.Println("Request for", r.URL)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	lang := GetLanguage()

	json.NewEncoder(w).Encode(lang)

}

func main() {

	http.HandleFunc("/", language)
	fmt.Println("Starting GO httpd on port 8080...")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		panic(err)
	}

}
