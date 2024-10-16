package cz.cvut.fit.tjv.social_network.server.model;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generates the primary key
    private Long id;

    private String username;

    private String email;

    private String password;

    private String description;

    private String profilePictureUrl;
    @Enumerated(EnumType.STRING) // Store role as a String
    private Role role;

}
