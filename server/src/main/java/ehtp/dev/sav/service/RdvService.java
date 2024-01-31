package ehtp.dev.sav.service;

import ehtp.dev.sav.domain.Client;
import ehtp.dev.sav.domain.Rdv;
import ehtp.dev.sav.model.RdvDTO;
import ehtp.dev.sav.repos.ClientRepository;
import ehtp.dev.sav.repos.RdvRepository;
import ehtp.dev.sav.util.NotFoundException;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
public class RdvService {

    private final RdvRepository rdvRepository;
    private final ClientRepository clientRepository;

    public RdvService(final RdvRepository rdvRepository, final ClientRepository clientRepository) {
        this.rdvRepository = rdvRepository;
        this.clientRepository = clientRepository;
    }

    public List<RdvDTO> findAll() {
        final List<Rdv> rdvs = rdvRepository.findAll(Sort.by("id"));
        return rdvs.stream()
                .map(rdv -> mapToDTO(rdv, new RdvDTO()))
                .toList();
    }

    public RdvDTO get(final Long id) {
        return rdvRepository.findById(id)
                .map(rdv -> mapToDTO(rdv, new RdvDTO()))
                .orElseThrow(NotFoundException::new);
    }

    public Long create(final RdvDTO rdvDTO) {
        final Rdv rdv = new Rdv();
        mapToEntity(rdvDTO, rdv);
        return rdvRepository.save(rdv).getId();
    }

    public void update(final Long id, final RdvDTO rdvDTO) {
        final Rdv rdv = rdvRepository.findById(id)
                .orElseThrow(NotFoundException::new);
        mapToEntity(rdvDTO, rdv);
        rdvRepository.save(rdv);
    }

    public void delete(final Long id) {
        rdvRepository.deleteById(id);
    }

    private RdvDTO mapToDTO(final Rdv rdv, final RdvDTO rdvDTO) {
        rdvDTO.setId(rdv.getId());
        rdvDTO.setEntretien(rdv.getEntretien());
        rdvDTO.setDate(rdv.getDate());
        rdvDTO.setDuration(rdv.getDuration());
        rdvDTO.setIsConfirmed(rdv.getIsConfirmed());
        rdvDTO.setClient(rdv.getClient() == null ? null : rdv.getClient().getId());
        return rdvDTO;
    }

    private Rdv mapToEntity(final RdvDTO rdvDTO, final Rdv rdv) {
        rdv.setEntretien(rdvDTO.getEntretien());
        rdv.setDate(rdvDTO.getDate());
        rdv.setDuration(rdvDTO.getDuration());
        rdv.setIsConfirmed(rdvDTO.getIsConfirmed());
        final Client client = rdvDTO.getClient() == null ? null : clientRepository.findById(rdvDTO.getClient())
                .orElseThrow(() -> new NotFoundException("client not found"));
        rdv.setClient(client);
        return rdv;
    }

}
