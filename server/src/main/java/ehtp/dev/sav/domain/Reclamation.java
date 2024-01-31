package ehtp.dev.sav.domain;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;


@Document
@Getter
@Setter
public class Reclamation {

    @Id
    private Long id;

    @NotNull
    @Size(max = 255)
    private String title;

    @NotNull
    @Size(max = 255)
    private String description;

    private LocalDate date;

    @DocumentReference(lazy = true)
    @NotNull
    private Client client;

    @DocumentReference(lazy = true)
    private AdminAgence adminAgence;

}
