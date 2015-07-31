import AddPersonPane from '../components/panes/AddPersonPane';
import CampaignPane from '../components/panes/CampaignPane';
import EditActionPane from '../components/panes/EditActionPane';
import LocationPane from '../components/panes/LocationPane';
import PersonPane from '../components/panes/PersonPane';

var _panes = {
    'addperson': AddPersonPane,
    'campaign': CampaignPane,
    'editaction': EditActionPane,
    'location': LocationPane,
    'person': PersonPane
};

function resolve(name) {
    if (name in _panes) {
        return _panes[name];
    }
    else {
        return null;
    }
}

export default {
    resolve: resolve
};
