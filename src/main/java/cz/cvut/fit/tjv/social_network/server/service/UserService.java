package cz.cvut.fit.tjv.social_network.server.service;

import cz.cvut.fit.tjv.social_network.server.model.User;
import cz.cvut.fit.tjv.social_network.server.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor

public class UserService {

    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }
}
