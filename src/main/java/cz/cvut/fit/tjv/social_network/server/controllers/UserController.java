package cz.cvut.fit.tjv.social_network.server.controllers;

import cz.cvut.fit.tjv.social_network.server.model.User;
import cz.cvut.fit.tjv.social_network.server.service.UserService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class UserController {
    private UserService userService;

    @GetMapping
    public Collection<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping
    public User createUser(@Valid @RequestBody User user) {
        return userService.createUser(user);
    }
}
