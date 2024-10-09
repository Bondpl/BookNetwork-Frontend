package cz.cvut.fit.tjv.social_network.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ServerApplication {
	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@GetMapping("/hello")
	public String hello() {
		return "Hello, World!";
	}

	@GetMapping("/")
	public String home() {
		return "Homepage";
	}

	@GetMapping("/notfound")
	public String notFound() {
		return "<!DOCTYPE html>\n" +
				"<html lang=\"en\">\n" +
				"<head>\n" +
				"    <meta charset=\"UTF-8\">\n" +
				"    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
				"    <title>Error Page</title>\n" +
				"</head>\n" +
				"<body>\n" +
				"<h1>Page Not Found</h1>\n" +
				"<p>The URL you entered could not be found.</p>\n" +
				"<a href=\"/\">Go to Homepage</a>\n" +
				"</body>\n" +
				"</html>\n";
	}
}