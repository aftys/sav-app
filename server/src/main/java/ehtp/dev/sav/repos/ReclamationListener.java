package ehtp.dev.sav.repos;

import ehtp.dev.sav.domain.Reclamation;
import ehtp.dev.sav.service.PrimarySequenceService;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;


@Component
public class ReclamationListener extends AbstractMongoEventListener<Reclamation> {

    private final PrimarySequenceService primarySequenceService;

    public ReclamationListener(final PrimarySequenceService primarySequenceService) {
        this.primarySequenceService = primarySequenceService;
    }

    @Override
    public void onBeforeConvert(final BeforeConvertEvent<Reclamation> event) {
        if (event.getSource().getId() == null) {
            event.getSource().setId(primarySequenceService.getNextValue());
        }
    }

}
