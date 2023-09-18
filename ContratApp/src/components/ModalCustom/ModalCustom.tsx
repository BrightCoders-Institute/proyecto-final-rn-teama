import React from 'react';
import {Text, View, Modal} from 'react-native';
import {Button} from '../Button/Button';
import {style} from './style';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {colors} from '../../../constants/colors';
import {ButtonSecondary} from '../ButtonSecondary/ButtonSecondary';

interface ModalCustomProps {
  visible: boolean;
  icon?: IconDefinition;
  onClose: () => void;
  onAccept: () => void;
  title: string;
  message: string;
  btnAcceptMsg: string;
  btnCloseMsg?: string;
}

const ModalCustom: React.FC<ModalCustomProps> = props => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onClose}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={style.container}>
          {props.icon ? (
            <FontAwesomeIcon
              icon={props.icon}
              size={65}
              color={colors.mainBlue}
              style={{marginBottom: 20}}
            />
          ) : (
            <></>
          )}
          <Text style={style.title}>{props.title}</Text>
          <Text style={style.message}>{props.message}</Text>
          <View style={style.btns_row}>
            {props.btnCloseMsg ? (
              <ButtonSecondary
                title={props.btnCloseMsg}
                onPress={props.onClose}
              />
            ) : (
              <></>
            )}
            <Button title={props.btnAcceptMsg} onPress={props.onAccept} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalCustom;
