package main

import "testing"

func TestGetLanguage(t *testing.T) {

	lang := GetLanguage()

	if lang.Name != "Go" {
		t.Error("U-oh, the language name should be 'Go'")
	}

}
