package ehtp.dev.sav.repos;

import ehtp.dev.sav.domain.Client;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface ClientRepository extends MongoRepository<Client, Long> {
}
