import React from 'react';
import { injectIntl, FormattedMessage as Msg } from 'react-intl';
import { connect } from 'react-redux';
import cx from 'classnames';

import PaneBase from './PaneBase';
import Avatar from '../misc/Avatar';
import Button from '../misc/Button';
import LoadingIndicator from '../misc/LoadingIndicator';
import { getListItemById } from '../../utils/store';
import {
    retrieveCall,
    toggleCallActionTaken,
} from '../../actions/call';


const mapStateToProps = (state, props) => ({
    callItem: getListItemById(state.calls.callList, props.paneData.params[0]),
});


@connect(mapStateToProps)
@injectIntl
export default class CallPane extends PaneBase {
    componentDidMount() {
        super.componentDidMount();

        let callId = this.getParam(0);
        this.props.dispatch(retrieveCall(callId));
    }

    getRenderData() {
        return {
            callItem: this.props.callItem,
        };
    }

    getPaneTitle(data) {
        const formatMessage = this.props.intl.formatMessage;
        if (data.callItem && !data.callItem.isPending) {
            return formatMessage({ id: 'panes.call.title' });
        }
        else {
            return formatMessage({ id: 'panes.call.pendingTitle' });
        }
    }

    renderPaneContent(data) {
        if (data.callItem && !data.callItem.isPending) {
            let call = data.callItem.data;
            let timestamp = Date.create(call.allocation_time);

            let callerNote = null;
            let action = null;

            let classes = cx('CallPane-content', 'status' + call.state);

            let summaryMsg = 'panes.call.summary.status' + call.state;
            let summaryValues = {
                caller: call.caller.name,
                target: call.target.name,
            };

            if (call.notes) {
                callerNote = <p>{ call.notes }</p>;
            }
            else {
                callerNote = (
                    <div className="empty">
                        <Msg tagName="p"
                            id="panes.call.note.noNote"/>
                    </div>
                );
            }

            if (call.organizer_action_taken || call.organizer_action_needed) {

                let actionStatus = null;
                let actionHeader = null;
                let actionMessage = null;
                let actionResponseButton = null;

                if (call.organizer_action_taken) {
                    actionStatus = "taken";
                    actionHeader = <Msg id="panes.call.action.header.taken"/>;
                    actionResponseButton = (
                        <Button className="CallPane-actionResponseButton"
                            labelMsg="panes.call.action.response.unresolve"
                            onClick={ this.onActionTakenClick.bind(this, false) }/>
                        );
                }
                else if (call.organizer_action_needed) {
                    actionStatus = "needed";
                    actionHeader = <Msg id="panes.call.action.header.needed"/>;

                    actionResponseButton = (
                        <Button className="CallPane-actionResponseButton"
                            labelMsg="panes.call.action.response.resolve"
                            onClick={ this.onActionTakenClick.bind(this, true) }/>
                        );
                }

                 let actionClassNames  = cx('CallPane-action', actionStatus );

                if (call.message_to_organizer) {
                    actionMessage = <p>{ call.message_to_organizer }</p>;
                }
                else {
                    actionMessage = (
                        <div className="empty">
                            <Msg tagName="p"
                                id="panes.call.action.content.noMessage"/>
                        </div>
                    );
                }

                action = (
                    <div className={ actionClassNames }>
                        <div className="CallPane-actionHeader">
                            { actionHeader }
                        </div>
                        <div className="CallPane-actionContent">
                            <Msg tagName="h3"
                                id="panes.call.action.content.header"/>
                            { actionMessage }
                        </div>
                        <div className="CallPane-actionResponse">
                            { actionResponseButton }
                        </div>
                    </div>
                );
            }

            return (
                <div className={ classes }>
                    <div className="CallPane-target">
                        <Avatar key="targetAvatar" person={ call.target }
                            onClick={ this.onTargetClick.bind(this) }/>
                        <h1 key="targetName" className="CallPane-targetName">
                            { call.target.name } </h1>
                    </div>
                    <div className="CallPane-status">
                        <span className="CallPane-statusBar0"/>
                        <span className="CallPane-statusBar1"/>
                    </div>
                     <div className="CallPane-summary">
                        <Msg id={ summaryMsg }
                            values={ summaryValues }
                            />
                    </div>
                    <div className="CallPane-caller">
                        <Avatar key="callerAvatar" className="CallPane-callerAvatar"
                            person={ call.caller }/>
                        <span key="callerName" className="CallPane-callerName">
                            { call.caller.name } </span>
                    </div>
                    <div className="CallPane-date">
                        { timestamp.format('{d}/{M}, {yyyy} {HH}:{MM}') }
                    </div>
                    <div className="CallPane-callerNote">
                        <Msg tagName="h3"
                            id="panes.call.note.header"/>
                        { callerNote }
                    </div>
                    { action }
                </div>
            );
        }
        else {
            return <LoadingIndicator/>;
        }
    }

    onTargetClick() {
        let call = this.props.callItem.data;

        this.openPane('person', call.target.id);
    }

    onActionTakenClick(actionTaken) {
        let callId = this.getParam(0);
        this.props.dispatch(toggleCallActionTaken(callId, actionTaken));
    }
}
