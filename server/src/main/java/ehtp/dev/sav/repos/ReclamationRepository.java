package ehtp.dev.sav.repos;

import ehtp.dev.sav.domain.Reclamation;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface ReclamationRepository extends MongoRepository<Reclamation, Long> {
}
