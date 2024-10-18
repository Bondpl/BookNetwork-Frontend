package cz.cvut.fit.tjv.social_network.server.repository;

import cz.cvut.fit.tjv.social_network.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    User findByEmail(String email);
}
