package ehtp.dev.sav.service;

import ehtp.dev.sav.domain.AdminAgence;
import ehtp.dev.sav.domain.Client;
import ehtp.dev.sav.domain.Reclamation;
import ehtp.dev.sav.model.ReclamationDTO;
import ehtp.dev.sav.repos.AdminAgenceRepository;
import ehtp.dev.sav.repos.ClientRepository;
import ehtp.dev.sav.repos.ReclamationRepository;
import ehtp.dev.sav.util.NotFoundException;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
public class ReclamationService {

    private final ReclamationRepository reclamationRepository;
    private final ClientRepository clientRepository;
    private final AdminAgenceRepository adminAgenceRepository;

    public ReclamationService(final ReclamationRepository reclamationRepository,
            final ClientRepository clientRepository,
            final AdminAgenceRepository adminAgenceRepository) {
        this.reclamationRepository = reclamationRepository;
        this.clientRepository = clientRepository;
        this.adminAgenceRepository = adminAgenceRepository;
    }

    public List<ReclamationDTO> findAll() {
        final List<Reclamation> reclamations = reclamationRepository.findAll(Sort.by("id"));
        return reclamations.stream()
                .map(reclamation -> mapToDTO(reclamation, new ReclamationDTO()))
                .toList();
    }

    public ReclamationDTO get(final Long id) {
        return reclamationRepository.findById(id)
                .map(reclamation -> mapToDTO(reclamation, new ReclamationDTO()))
                .orElseThrow(NotFoundException::new);
    }

    public Long create(final ReclamationDTO reclamationDTO) {
        final Reclamation reclamation = new Reclamation();
        mapToEntity(reclamationDTO, reclamation);
        return reclamationRepository.save(reclamation).getId();
    }

    public void update(final Long id, final ReclamationDTO reclamationDTO) {
        final Reclamation reclamation = reclamationRepository.findById(id)
                .orElseThrow(NotFoundException::new);
        mapToEntity(reclamationDTO, reclamation);
        reclamationRepository.save(reclamation);
    }

    public void delete(final Long id) {
        reclamationRepository.deleteById(id);
    }

    private ReclamationDTO mapToDTO(final Reclamation reclamation,
            final ReclamationDTO reclamationDTO) {
        reclamationDTO.setId(reclamation.getId());
        reclamationDTO.setTitle(reclamation.getTitle());
        reclamationDTO.setDescription(reclamation.getDescription());
        reclamationDTO.setDate(reclamation.getDate());
        reclamationDTO.setClient(reclamation.getClient() == null ? null : reclamation.getClient().getId());
        reclamationDTO.setAdminAgence(reclamation.getAdminAgence() == null ? null : reclamation.getAdminAgence().getId());
        return reclamationDTO;
    }

    private Reclamation mapToEntity(final ReclamationDTO reclamationDTO,
            final Reclamation reclamation) {
        reclamation.setTitle(reclamationDTO.getTitle());
        reclamation.setDescription(reclamationDTO.getDescription());
        reclamation.setDate(reclamationDTO.getDate());
        final Client client = reclamationDTO.getClient() == null ? null : clientRepository.findById(reclamationDTO.getClient())
                .orElseThrow(() -> new NotFoundException("client not found"));
        reclamation.setClient(client);
        final AdminAgence adminAgence = reclamationDTO.getAdminAgence() == null ? null : adminAgenceRepository.findById(reclamationDTO.getAdminAgence())
                .orElseThrow(() -> new NotFoundException("adminAgence not found"));
        reclamation.setAdminAgence(adminAgence);
        return reclamation;
    }

}
