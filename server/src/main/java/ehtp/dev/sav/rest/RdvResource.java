package ehtp.dev.sav.rest;

import ehtp.dev.sav.model.RdvDTO;
import ehtp.dev.sav.service.RdvService;
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
@RequestMapping(value = "/api/rdvs", produces = MediaType.APPLICATION_JSON_VALUE)
public class RdvResource {

    private final RdvService rdvService;

    public RdvResource(final RdvService rdvService) {
        this.rdvService = rdvService;
    }

    @GetMapping
    public ResponseEntity<List<RdvDTO>> getAllRdvs() {
        return ResponseEntity.ok(rdvService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<RdvDTO> getRdv(@PathVariable(name = "id") final Long id) {
        return ResponseEntity.ok(rdvService.get(id));
    }

    @PostMapping
    @ApiResponse(responseCode = "201")
    public ResponseEntity<Long> createRdv(@RequestBody @Valid final RdvDTO rdvDTO) {
        final Long createdId = rdvService.create(rdvDTO);
        return new ResponseEntity<>(createdId, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Long> updateRdv(@PathVariable(name = "id") final Long id,
            @RequestBody @Valid final RdvDTO rdvDTO) {
        rdvService.update(id, rdvDTO);
        return ResponseEntity.ok(id);
    }

    @DeleteMapping("/{id}")
    @ApiResponse(responseCode = "204")
    public ResponseEntity<Void> deleteRdv(@PathVariable(name = "id") final Long id) {
        rdvService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
