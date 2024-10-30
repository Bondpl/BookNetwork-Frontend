package cz.cvut.fit.tjv.social_network.server.model;


import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Entity
@Data
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID uuid = UUID.randomUUID();

    private String username;

    private String email;

    private String password;

    private String description;

    private String profilePictureUrl;

    @Enumerated(EnumType.STRING)
    private Role role;

}
