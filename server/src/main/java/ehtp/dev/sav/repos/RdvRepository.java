package ehtp.dev.sav.repos;

import ehtp.dev.sav.domain.Rdv;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface RdvRepository extends MongoRepository<Rdv, Long> {
}
