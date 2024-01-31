package ehtp.dev.sav.rest;

import ehtp.dev.sav.model.ReclamationDTO;
import ehtp.dev.sav.service.ReclamationService;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value = "/api/reclamations", produces = MediaType.APPLICATION_JSON_VALUE)
public class ReclamationResource {

    private final ReclamationService reclamationService;

    public ReclamationResource(final ReclamationService reclamationService) {
        this.reclamationService = reclamationService;
    }

    @GetMapping
    public ResponseEntity<List<ReclamationDTO>> getAllReclamations() {
        return ResponseEntity.ok(reclamationService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReclamationDTO> getReclamation(@PathVariable(name = "id") final Long id) {
        return ResponseEntity.ok(reclamationService.get(id));
    }

    @PostMapping
    @ApiResponse(responseCode = "201")
    public ResponseEntity<Long> createReclamation(
            @RequestBody @Valid final ReclamationDTO reclamationDTO) {
        final Long createdId = reclamationService.create(reclamationDTO);
        return new ResponseEntity<>(createdId, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Long> updateReclamation(@PathVariable(name = "id") final Long id,
            @RequestBody @Valid final ReclamationDTO reclamationDTO) {
        reclamationService.update(id, reclamationDTO);
        return ResponseEntity.ok(id);
    }

    @DeleteMapping("/{id}")
    @ApiResponse(responseCode = "204")
    public ResponseEntity<Void> deleteReclamation(@PathVariable(name = "id") final Long id) {
        reclamationService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
