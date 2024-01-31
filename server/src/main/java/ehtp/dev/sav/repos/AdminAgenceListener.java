package ehtp.dev.sav.repos;

import ehtp.dev.sav.domain.AdminAgence;
import ehtp.dev.sav.service.PrimarySequenceService;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;


@Component
public class AdminAgenceListener extends AbstractMongoEventListener<AdminAgence> {

    private final PrimarySequenceService primarySequenceService;

    public AdminAgenceListener(final PrimarySequenceService primarySequenceService) {
        this.primarySequenceService = primarySequenceService;
    }

    @Override
    public void onBeforeConvert(final BeforeConvertEvent<AdminAgence> event) {
        if (event.getSource().getId() == null) {
            event.getSource().setId(primarySequenceService.getNextValue());
        }
    }

}
