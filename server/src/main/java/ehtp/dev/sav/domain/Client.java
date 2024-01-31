package ehtp.dev.sav.domain;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.util.Set;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.ReadOnlyProperty;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;


@Document
@Getter
@Setter
public class Client {

    @Id
    private Long id;

    @NotNull
    @Size(max = 255)
    private String firstName;

    @NotNull
    @Size(max = 255)
    private String secondName;

    @NotNull
    @Size(max = 255)
    private String email;

    @NotNull
    @Size(max = 255)
    private String pwd;

    @NotNull
    @Size(max = 255)
    private String telph;

    @DocumentReference(lazy = true, lookup = "{ 'client' : ?#{#self._id} }")
    @ReadOnlyProperty
    private Set<Rdv> rdvs;

    @DocumentReference(lazy = true, lookup = "{ 'client' : ?#{#self._id} }")
    @ReadOnlyProperty
    private Set<Reclamation> reclamations;

}
