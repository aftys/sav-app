package ehtp.dev.sav.rest;

import ehtp.dev.sav.model.AdminAgenceDTO;
import ehtp.dev.sav.service.AdminAgenceService;
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
@RequestMapping(value = "/api/adminAgences", produces = MediaType.APPLICATION_JSON_VALUE)
public class AdminAgenceResource {

    private final AdminAgenceService adminAgenceService;

    public AdminAgenceResource(final AdminAgenceService adminAgenceService) {
        this.adminAgenceService = adminAgenceService;
    }

    @GetMapping
    public ResponseEntity<List<AdminAgenceDTO>> getAllAdminAgences() {
        return ResponseEntity.ok(adminAgenceService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AdminAgenceDTO> getAdminAgence(@PathVariable(name = "id") final Long id) {
        return ResponseEntity.ok(adminAgenceService.get(id));
    }

    @PostMapping
    @ApiResponse(responseCode = "201")
    public ResponseEntity<Long> createAdminAgence(
            @RequestBody @Valid final AdminAgenceDTO adminAgenceDTO) {
        final Long createdId = adminAgenceService.create(adminAgenceDTO);
        return new ResponseEntity<>(createdId, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Long> updateAdminAgence(@PathVariable(name = "id") final Long id,
            @RequestBody @Valid final AdminAgenceDTO adminAgenceDTO) {
        adminAgenceService.update(id, adminAgenceDTO);
        return ResponseEntity.ok(id);
    }

    @DeleteMapping("/{id}")
    @ApiResponse(responseCode = "204")
    public ResponseEntity<Void> deleteAdminAgence(@PathVariable(name = "id") final Long id) {
        adminAgenceService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
