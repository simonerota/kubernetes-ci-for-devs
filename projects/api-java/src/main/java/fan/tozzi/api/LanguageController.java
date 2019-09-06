package fan.tozzi.api;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
public class LanguageController {

	@CrossOrigin(origins = "*")
	@GetMapping("/")
	public Language language() {
		Language lang = new Language();
		lang.setName("Java");
		lang.setYear(1996);
		lang.setNotes("Requires a beard to function properly");
		return lang;
	}

}
