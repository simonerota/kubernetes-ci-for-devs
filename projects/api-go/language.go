package main

// LanguageInfo is a representation of a programming language
type LanguageInfo struct {
	Name  string
	Year  int
	Notes string
}

// GetLanguage returns info about the Go language
func GetLanguage() LanguageInfo {

	lang := LanguageInfo{}
	lang.Name = "Go"
	lang.Year = 2012
	lang.Notes = "Really fun to use!"

	return lang
}
