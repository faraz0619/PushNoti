import React, { useEffect } from 'react';
import { View, Text, Alert, Linking, Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';

const Permission = () => {
  useEffect(() => {
    checkNotificationPermissions();
  }, []);

  const openAppSettings = () => {
    Linking.openSettings();
  };

  const showEnableNotificationAlert = () => {
    Alert.alert(
      'Enable Notifications',
      'Please enable notifications for this app in your device settings.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Open Settings', onPress: openAppSettings },
      ]
    );
  };

  const checkNotificationPermissions = () => {
    const androidVersion = Platform.Version;
    if (Platform.OS === 'android' && androidVersion >= 12) {
      PushNotification.checkPermissions((permissions) => {
        if (!permissions.alert) {
          showEnableNotificationAlert();
        }
      });
    }
  };

  return (
    <View>
      <Text>Welcome to the Home Screen</Text>
      <View>
        <Text>Updated Code</Text>
      </View>
    </View>
  );
};

export default Permission;
