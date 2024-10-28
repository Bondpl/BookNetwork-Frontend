package cz.cvut.fit.tjv.social_network.server.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
@AllArgsConstructor
public class HomeController {

    @RequestMapping("/")
    public String home() {
        return "Welcome to the social network!";
    }
}
