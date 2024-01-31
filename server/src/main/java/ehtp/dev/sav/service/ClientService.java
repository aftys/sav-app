package ehtp.dev.sav.service;

import ehtp.dev.sav.domain.Client;
import ehtp.dev.sav.model.ClientDTO;
import ehtp.dev.sav.repos.ClientRepository;
import ehtp.dev.sav.util.NotFoundException;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
public class ClientService {

    private final ClientRepository clientRepository;

    public ClientService(final ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<ClientDTO> findAll() {
        final List<Client> clients = clientRepository.findAll(Sort.by("id"));
        return clients.stream()
                .map(client -> mapToDTO(client, new ClientDTO()))
                .toList();
    }

    public ClientDTO get(final Long id) {
        return clientRepository.findById(id)
                .map(client -> mapToDTO(client, new ClientDTO()))
                .orElseThrow(NotFoundException::new);
    }

    public Long create(final ClientDTO clientDTO) {
        final Client client = new Client();
        mapToEntity(clientDTO, client);
        return clientRepository.save(client).getId();
    }

    public void update(final Long id, final ClientDTO clientDTO) {
        final Client client = clientRepository.findById(id)
                .orElseThrow(NotFoundException::new);
        mapToEntity(clientDTO, client);
        clientRepository.save(client);
    }

    public void delete(final Long id) {
        clientRepository.deleteById(id);
    }

    private ClientDTO mapToDTO(final Client client, final ClientDTO clientDTO) {
        clientDTO.setId(client.getId());
        clientDTO.setFirstName(client.getFirstName());
        clientDTO.setSecondName(client.getSecondName());
        clientDTO.setEmail(client.getEmail());
        clientDTO.setPwd(client.getPwd());
        clientDTO.setTelph(client.getTelph());
        return clientDTO;
    }

    private Client mapToEntity(final ClientDTO clientDTO, final Client client) {
        client.setFirstName(clientDTO.getFirstName());
        client.setSecondName(clientDTO.getSecondName());
        client.setEmail(clientDTO.getEmail());
        client.setPwd(clientDTO.getPwd());
        client.setTelph(clientDTO.getTelph());
        return client;
    }

}
