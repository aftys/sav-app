package ehtp.dev.sav.service;

import ehtp.dev.sav.domain.AdminAgence;
import ehtp.dev.sav.model.AdminAgenceDTO;
import ehtp.dev.sav.repos.AdminAgenceRepository;
import ehtp.dev.sav.util.NotFoundException;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
public class AdminAgenceService {

    private final AdminAgenceRepository adminAgenceRepository;

    public AdminAgenceService(final AdminAgenceRepository adminAgenceRepository) {
        this.adminAgenceRepository = adminAgenceRepository;
    }

    public List<AdminAgenceDTO> findAll() {
        final List<AdminAgence> adminAgences = adminAgenceRepository.findAll(Sort.by("id"));
        return adminAgences.stream()
                .map(adminAgence -> mapToDTO(adminAgence, new AdminAgenceDTO()))
                .toList();
    }

    public AdminAgenceDTO get(final Long id) {
        return adminAgenceRepository.findById(id)
                .map(adminAgence -> mapToDTO(adminAgence, new AdminAgenceDTO()))
                .orElseThrow(NotFoundException::new);
    }

    public Long create(final AdminAgenceDTO adminAgenceDTO) {
        final AdminAgence adminAgence = new AdminAgence();
        mapToEntity(adminAgenceDTO, adminAgence);
        return adminAgenceRepository.save(adminAgence).getId();
    }

    public void update(final Long id, final AdminAgenceDTO adminAgenceDTO) {
        final AdminAgence adminAgence = adminAgenceRepository.findById(id)
                .orElseThrow(NotFoundException::new);
        mapToEntity(adminAgenceDTO, adminAgence);
        adminAgenceRepository.save(adminAgence);
    }

    public void delete(final Long id) {
        adminAgenceRepository.deleteById(id);
    }

    private AdminAgenceDTO mapToDTO(final AdminAgence adminAgence,
            final AdminAgenceDTO adminAgenceDTO) {
        adminAgenceDTO.setId(adminAgence.getId());
        adminAgenceDTO.setFirstName(adminAgence.getFirstName());
        adminAgenceDTO.setSecondName(adminAgence.getSecondName());
        adminAgenceDTO.setEmail(adminAgence.getEmail());
        adminAgenceDTO.setPwd(adminAgence.getPwd());
        adminAgenceDTO.setTelph(adminAgence.getTelph());
        adminAgenceDTO.setAgency(adminAgence.getAgency());
        return adminAgenceDTO;
    }

    private AdminAgence mapToEntity(final AdminAgenceDTO adminAgenceDTO,
            final AdminAgence adminAgence) {
        adminAgence.setFirstName(adminAgenceDTO.getFirstName());
        adminAgence.setSecondName(adminAgenceDTO.getSecondName());
        adminAgence.setEmail(adminAgenceDTO.getEmail());
        adminAgence.setPwd(adminAgenceDTO.getPwd());
        adminAgence.setTelph(adminAgenceDTO.getTelph());
        adminAgence.setAgency(adminAgenceDTO.getAgency());
        return adminAgence;
    }

}
