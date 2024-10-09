package cz.cvut.fit.tjv.social_network.server.controllers;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Handler404 implements ErrorController {

    @RequestMapping("/error")
    public String handleError() {
        return "redirect:/notfound";
    }

    public String getErrorPath() {
        return "/error";
    }
}