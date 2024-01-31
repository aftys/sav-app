package ehtp.dev.sav.domain;

import ehtp.dev.sav.model.TypeEntretien;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;


@Document
@Getter
@Setter
public class Rdv {

    @Id
    private Long id;

    @NotNull
    private TypeEntretien entretien;

    @NotNull
    private LocalDateTime date;

    private Double duration;

    @NotNull
    private Boolean isConfirmed;

    @DocumentReference(lazy = true)
    @NotNull
    private Client client;

}
