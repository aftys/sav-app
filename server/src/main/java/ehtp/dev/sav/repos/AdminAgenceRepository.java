package ehtp.dev.sav.repos;

import ehtp.dev.sav.domain.AdminAgence;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface AdminAgenceRepository extends MongoRepository<AdminAgence, Long> {
}
