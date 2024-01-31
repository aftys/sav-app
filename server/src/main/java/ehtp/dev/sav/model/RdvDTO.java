package ehtp.dev.sav.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class RdvDTO {

    private Long id;

    @NotNull
    private TypeEntretien entretien;

    @NotNull
    private LocalDateTime date;

    private Double duration;

    @NotNull
    @JsonProperty("isConfirmed")
    private Boolean isConfirmed;

    @NotNull
    private Long client;

}
