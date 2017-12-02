// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { TableCell } from 'quark-core'
// @flow
import {
    IconActivity,
    IconAirplay,
    IconAlertCircle,
    IconAlertOctagon,
    IconAlertTriangle,
    IconAlignCenter,
    IconAlignJustify,
    IconAlignLeft,
    IconAlignRight,
    IconAnchor,
    IconAperture,
    IconArrowDown,
    IconArrowDownLeft,
    IconArrowDownRight,
    IconArrowLeft,
    IconArrowRight,
    IconArrowUp,
    IconArrowUpLeft,
    IconArrowUpRight,
    IconAtSign,
    IconAward,
    IconBarChart,
    IconBarChart2,
    IconBattery,
    IconBatteryCharging,
    IconBell,
    IconBellOff,
    IconBluetooth,
    IconBold,
    IconBook,
    IconBookmark,
    IconBox,
    IconBriefcase,
    IconCalendar,
    IconCamera,
    IconCameraOff,
    IconCast,
    IconCheck,
    IconCheckCircle,
    IconCheckSquare,
    IconChevronDown,
    IconChevronLeft,
    IconChevronRight,
    IconChevronUp,
    IconChevronsDown,
    IconChevronsLeft,
    IconChevronsRight,
    IconChevronsUp,
    IconChrome,
    IconCircle,
    IconClipboard,
    IconClock,
    IconCloud,
    IconCloudDrizzle,
    IconCloudLightning,
    IconCloudOff,
    IconCloudRain,
    IconCloudSnow,
    IconCodepen,
    IconCommand,
    IconCompass,
    IconCopy,
    IconCornerDownLeft,
    IconCornerDownRight,
    IconCornerLeftDown,
    IconCornerLeftUp,
    IconCornerRightDown,
    IconCornerRightUp,
    IconCornerUpLeft,
    IconCornerUpRight,
    IconCpu,
    IconCreditCard,
    IconCrop,
    IconCrosshair,
    IconDelete,
    IconDisc,
    IconDownload,
    IconDownloadCloud,
    IconDroplet,
    IconEdit,
    IconEdit2,
    IconEdit3,
    IconExternalLink,
    IconEye,
    IconEyeOff,
    IconFacebook,
    IconFastForward,
    IconFeather,
    IconFile,
    IconFileMinus,
    IconFilePlus,
    IconFileText,
    IconFilm,
    IconFilter,
    IconFlag,
    IconFolder,
    IconGithub,
    IconGitlab,
    IconGlobe,
    IconGrid,
    IconHash,
    IconHeadphones,
    IconHeart,
    IconHelpCircle,
    IconHome,
    IconImage,
    IconInbox,
    IconInfo,
    IconInstagram,
    IconItalic,
    IconLayers,
    IconLayout,
    IconLifeBuoy,
    IconLink,
    IconLink2,
    IconList,
    IconLoader,
    IconLock,
    IconLogIn,
    IconLogOut,
    IconMail,
    IconMap,
    IconMapPin,
    IconMaximize,
    IconMaximize2,
    IconMenu,
    IconMessageCircle,
    IconMessageSquare,
    IconMic,
    IconMicOff,
    IconMinimize,
    IconMinimize2,
    IconMinus,
    IconMinusCircle,
    IconMinusSquare,
    IconMonitor,
    IconMoon,
    IconMoreHorizontal,
    IconMoreVertical,
    IconMove,
    IconMusic,
    IconNavigation,
    IconNavigation2,
    IconOctagon,
    IconPackage,
    IconPaperclip,
    IconPause,
    IconPauseCircle,
    IconPercent,
    IconPhone,
    IconPhoneCall,
    IconPhoneForwarded,
    IconPhoneIncoming,
    IconPhoneMissed,
    IconPhoneOff,
    IconPhoneOutgoing,
    IconPieChart,
    IconPlay,
    IconPlayCircle,
    IconPlus,
    IconPlusCircle,
    IconPlusSquare,
    IconPocket,
    IconPower,
    IconPrinter,
    IconRadio,
    IconRefreshCcw,
    IconRefreshCw,
    IconRepeat,
    IconRewind,
    IconRotateCcw,
    IconRotateCw,
    IconSave,
    IconScissors,
    IconSearch,
    IconServer,
    IconSettings,
    IconShare,
    IconShare2,
    IconShield,
    IconShoppingCart,
    IconShuffle,
    IconSidebar,
    IconSkipBack,
    IconSkipForward,
    IconSlack,
    IconSlash,
    IconSliders,
    IconSmartphone,
    IconSpeaker,
    IconSquare,
    IconStar,
    IconStopCircle,
    IconSun,
    IconSunrise,
    IconSunset,
    IconTablet,
    IconTag,
    IconTarget,
    IconThermometer,
    IconThumbsDown,
    IconThumbsUp,
    IconToggleLeft,
    IconToggleRight,
    IconTrash,
    IconTrash2,
    IconTrendingDown,
    IconTrendingUp,
    IconTriangle,
    IconTv,
    IconTwitter,
    IconType,
    IconUmbrella,
    IconUnderline,
    IconUnlock,
    IconUpload,
    IconUploadCloud,
    IconUser,
    IconUserCheck,
    IconUserMinus,
    IconUserPlus,
    IconUserX,
    IconUsers,
    IconVideo,
    IconVideoOff,
    IconVoicemail,
    IconVolume,
    IconVolume1,
    IconVolume2,
    IconVolumeX,
    IconWatch,
    IconWifi,
    IconWifiOff,
    IconWind,
    IconX,
    IconXCircle,
    IconXSquare,
    IconZap,
    IconZoomIn,
    IconZoomOut
} from 'quark-core'

test('IconActivity', () => expect(mount(<IconActivity />)).toMatchSnapshot())

test('IconAirplay', () => expect(mount(<IconAirplay />)).toMatchSnapshot())

test('IconAlertCircle', () => expect(mount(<IconAlertCircle />)).toMatchSnapshot())

test('IconAlertOctagon', () => expect(mount(<IconAlertOctagon />)).toMatchSnapshot())

test('IconAlertTriangle', () => expect(mount(<IconAlertTriangle />)).toMatchSnapshot())

test('IconAlignCenter', () => expect(mount(<IconAlignCenter />)).toMatchSnapshot())

test('IconAlignJustify', () => expect(mount(<IconAlignJustify />)).toMatchSnapshot())

test('IconAlignLeft', () => expect(mount(<IconAlignLeft />)).toMatchSnapshot())

test('IconAlignRight', () => expect(mount(<IconAlignRight />)).toMatchSnapshot())

test('IconAnchor', () => expect(mount(<IconAnchor />)).toMatchSnapshot())

test('IconAperture', () => expect(mount(<IconAperture />)).toMatchSnapshot())

test('IconArrowDown', () => expect(mount(<IconArrowDown />)).toMatchSnapshot())

test('IconArrowDownLeft', () => expect(mount(<IconArrowDownLeft />)).toMatchSnapshot())

test('IconArrowDownRight', () => expect(mount(<IconArrowDownRight />)).toMatchSnapshot())

test('IconArrowLeft', () => expect(mount(<IconArrowLeft />)).toMatchSnapshot())

test('IconArrowRight', () => expect(mount(<IconArrowRight />)).toMatchSnapshot())

test('IconArrowUp', () => expect(mount(<IconArrowUp />)).toMatchSnapshot())

test('IconArrowUpLeft', () => expect(mount(<IconArrowUpLeft />)).toMatchSnapshot())

test('IconArrowUpRight', () => expect(mount(<IconArrowUpRight />)).toMatchSnapshot())

test('IconAtSign', () => expect(mount(<IconAtSign />)).toMatchSnapshot())

test('IconAward', () => expect(mount(<IconAward />)).toMatchSnapshot())

test('IconBarChart', () => expect(mount(<IconBarChart />)).toMatchSnapshot())

test('IconBarChart2', () => expect(mount(<IconBarChart2 />)).toMatchSnapshot())

test('IconBattery', () => expect(mount(<IconBattery />)).toMatchSnapshot())

test('IconBatteryCharging', () => expect(mount(<IconBatteryCharging />)).toMatchSnapshot())

test('IconBell', () => expect(mount(<IconBell />)).toMatchSnapshot())

test('IconBellOff', () => expect(mount(<IconBellOff />)).toMatchSnapshot())

test('IconBluetooth', () => expect(mount(<IconBluetooth />)).toMatchSnapshot())

test('IconBold', () => expect(mount(<IconBold />)).toMatchSnapshot())

test('IconBook', () => expect(mount(<IconBook />)).toMatchSnapshot())

test('IconBookmark', () => expect(mount(<IconBookmark />)).toMatchSnapshot())

test('IconBox', () => expect(mount(<IconBox />)).toMatchSnapshot())

test('IconBriefcase', () => expect(mount(<IconBriefcase />)).toMatchSnapshot())

test('IconCalendar', () => expect(mount(<IconCalendar />)).toMatchSnapshot())

test('IconCamera', () => expect(mount(<IconCamera />)).toMatchSnapshot())

test('IconCameraOff', () => expect(mount(<IconCameraOff />)).toMatchSnapshot())

test('IconCast', () => expect(mount(<IconCast />)).toMatchSnapshot())

test('IconCheck', () => expect(mount(<IconCheck />)).toMatchSnapshot())

test('IconCheckCircle', () => expect(mount(<IconCheckCircle />)).toMatchSnapshot())

test('IconCheckSquare', () => expect(mount(<IconCheckSquare />)).toMatchSnapshot())

test('IconChevronDown', () => expect(mount(<IconChevronDown />)).toMatchSnapshot())

test('IconChevronLeft', () => expect(mount(<IconChevronLeft />)).toMatchSnapshot())

test('IconChevronRight', () => expect(mount(<IconChevronRight />)).toMatchSnapshot())

test('IconChevronUp', () => expect(mount(<IconChevronUp />)).toMatchSnapshot())

test('IconChevronsDown', () => expect(mount(<IconChevronsDown />)).toMatchSnapshot())

test('IconChevronsLeft', () => expect(mount(<IconChevronsLeft />)).toMatchSnapshot())

test('IconChevronsRight', () => expect(mount(<IconChevronsRight />)).toMatchSnapshot())

test('IconChevronsUp', () => expect(mount(<IconChevronsUp />)).toMatchSnapshot())

test('IconChrome', () => expect(mount(<IconChrome />)).toMatchSnapshot())

test('IconCircle', () => expect(mount(<IconCircle />)).toMatchSnapshot())

test('IconClipboard', () => expect(mount(<IconClipboard />)).toMatchSnapshot())

test('IconClock', () => expect(mount(<IconClock />)).toMatchSnapshot())

test('IconCloud', () => expect(mount(<IconCloud />)).toMatchSnapshot())

test('IconCloudDrizzle', () => expect(mount(<IconCloudDrizzle />)).toMatchSnapshot())

test('IconCloudLightning', () => expect(mount(<IconCloudLightning />)).toMatchSnapshot())

test('IconCloudOff', () => expect(mount(<IconCloudOff />)).toMatchSnapshot())

test('IconCloudRain', () => expect(mount(<IconCloudRain />)).toMatchSnapshot())

test('IconCloudSnow', () => expect(mount(<IconCloudSnow />)).toMatchSnapshot())

test('IconCodepen', () => expect(mount(<IconCodepen />)).toMatchSnapshot())

test('IconCommand', () => expect(mount(<IconCommand />)).toMatchSnapshot())

test('IconCompass', () => expect(mount(<IconCompass />)).toMatchSnapshot())

test('IconCopy', () => expect(mount(<IconCopy />)).toMatchSnapshot())

test('IconCornerDownLeft', () => expect(mount(<IconCornerDownLeft />)).toMatchSnapshot())

test('IconCornerDownRight', () => expect(mount(<IconCornerDownRight />)).toMatchSnapshot())

test('IconCornerLeftDown', () => expect(mount(<IconCornerLeftDown />)).toMatchSnapshot())

test('IconCornerLeftUp', () => expect(mount(<IconCornerLeftUp />)).toMatchSnapshot())

test('IconCornerRightDown', () => expect(mount(<IconCornerRightDown />)).toMatchSnapshot())

test('IconCornerRightUp', () => expect(mount(<IconCornerRightUp />)).toMatchSnapshot())

test('IconCornerUpLeft', () => expect(mount(<IconCornerUpLeft />)).toMatchSnapshot())

test('IconCornerUpRight', () => expect(mount(<IconCornerUpRight />)).toMatchSnapshot())

test('IconCpu', () => expect(mount(<IconCpu />)).toMatchSnapshot())

test('IconCreditCard', () => expect(mount(<IconCreditCard />)).toMatchSnapshot())

test('IconCrop', () => expect(mount(<IconCrop />)).toMatchSnapshot())

test('IconCrosshair', () => expect(mount(<IconCrosshair />)).toMatchSnapshot())

test('IconDelete', () => expect(mount(<IconDelete />)).toMatchSnapshot())

test('IconDisc', () => expect(mount(<IconDisc />)).toMatchSnapshot())

test('IconDownload', () => expect(mount(<IconDownload />)).toMatchSnapshot())

test('IconDownloadCloud', () => expect(mount(<IconDownloadCloud />)).toMatchSnapshot())

test('IconDroplet', () => expect(mount(<IconDroplet />)).toMatchSnapshot())

test('IconEdit', () => expect(mount(<IconEdit />)).toMatchSnapshot())

test('IconEdit2', () => expect(mount(<IconEdit2 />)).toMatchSnapshot())

test('IconEdit3', () => expect(mount(<IconEdit3 />)).toMatchSnapshot())

test('IconExternalLink', () => expect(mount(<IconExternalLink />)).toMatchSnapshot())

test('IconEye', () => expect(mount(<IconEye />)).toMatchSnapshot())

test('IconEyeOff', () => expect(mount(<IconEyeOff />)).toMatchSnapshot())

test('IconFacebook', () => expect(mount(<IconFacebook />)).toMatchSnapshot())

test('IconFastForward', () => expect(mount(<IconFastForward />)).toMatchSnapshot())

test('IconFeather', () => expect(mount(<IconFeather />)).toMatchSnapshot())

test('IconFile', () => expect(mount(<IconFile />)).toMatchSnapshot())

test('IconFileMinus', () => expect(mount(<IconFileMinus />)).toMatchSnapshot())

test('IconFilePlus', () => expect(mount(<IconFilePlus />)).toMatchSnapshot())

test('IconFileText', () => expect(mount(<IconFileText />)).toMatchSnapshot())

test('IconFilm', () => expect(mount(<IconFilm />)).toMatchSnapshot())

test('IconFilter', () => expect(mount(<IconFilter />)).toMatchSnapshot())

test('IconFlag', () => expect(mount(<IconFlag />)).toMatchSnapshot())

test('IconFolder', () => expect(mount(<IconFolder />)).toMatchSnapshot())

test('IconGithub', () => expect(mount(<IconGithub />)).toMatchSnapshot())

test('IconGitlab', () => expect(mount(<IconGitlab />)).toMatchSnapshot())

test('IconGlobe', () => expect(mount(<IconGlobe />)).toMatchSnapshot())

test('IconGrid', () => expect(mount(<IconGrid />)).toMatchSnapshot())

test('IconHash', () => expect(mount(<IconHash />)).toMatchSnapshot())

test('IconHeadphones', () => expect(mount(<IconHeadphones />)).toMatchSnapshot())

test('IconHeart', () => expect(mount(<IconHeart />)).toMatchSnapshot())

test('IconHelpCircle', () => expect(mount(<IconHelpCircle />)).toMatchSnapshot())

test('IconHome', () => expect(mount(<IconHome />)).toMatchSnapshot())

test('IconImage', () => expect(mount(<IconImage />)).toMatchSnapshot())

test('IconInbox', () => expect(mount(<IconInbox />)).toMatchSnapshot())

test('IconInfo', () => expect(mount(<IconInfo />)).toMatchSnapshot())

test('IconInstagram', () => expect(mount(<IconInstagram />)).toMatchSnapshot())

test('IconItalic', () => expect(mount(<IconItalic />)).toMatchSnapshot())

test('IconLayers', () => expect(mount(<IconLayers />)).toMatchSnapshot())

test('IconLayout', () => expect(mount(<IconLayout />)).toMatchSnapshot())

test('IconLifeBuoy', () => expect(mount(<IconLifeBuoy />)).toMatchSnapshot())

test('IconLink', () => expect(mount(<IconLink />)).toMatchSnapshot())

test('IconLink2', () => expect(mount(<IconLink2 />)).toMatchSnapshot())

test('IconList', () => expect(mount(<IconList />)).toMatchSnapshot())

test('IconLoader', () => expect(mount(<IconLoader />)).toMatchSnapshot())

test('IconLock', () => expect(mount(<IconLock />)).toMatchSnapshot())

test('IconLogIn', () => expect(mount(<IconLogIn />)).toMatchSnapshot())

test('IconLogOut', () => expect(mount(<IconLogOut />)).toMatchSnapshot())

test('IconMail', () => expect(mount(<IconMail />)).toMatchSnapshot())

test('IconMap', () => expect(mount(<IconMap />)).toMatchSnapshot())

test('IconMapPin', () => expect(mount(<IconMapPin />)).toMatchSnapshot())

test('IconMaximize', () => expect(mount(<IconMaximize />)).toMatchSnapshot())

test('IconMaximize2', () => expect(mount(<IconMaximize2 />)).toMatchSnapshot())

test('IconMenu', () => expect(mount(<IconMenu />)).toMatchSnapshot())

test('IconMessageCircle', () => expect(mount(<IconMessageCircle />)).toMatchSnapshot())

test('IconMessageSquare', () => expect(mount(<IconMessageSquare />)).toMatchSnapshot())

test('IconMic', () => expect(mount(<IconMic />)).toMatchSnapshot())

test('IconMicOff', () => expect(mount(<IconMicOff />)).toMatchSnapshot())

test('IconMinimize', () => expect(mount(<IconMinimize />)).toMatchSnapshot())

test('IconMinimize2', () => expect(mount(<IconMinimize2 />)).toMatchSnapshot())

test('IconMinus', () => expect(mount(<IconMinus />)).toMatchSnapshot())

test('IconMinusCircle', () => expect(mount(<IconMinusCircle />)).toMatchSnapshot())

test('IconMinusSquare', () => expect(mount(<IconMinusSquare />)).toMatchSnapshot())

test('IconMonitor', () => expect(mount(<IconMonitor />)).toMatchSnapshot())

test('IconMoon', () => expect(mount(<IconMoon />)).toMatchSnapshot())

test('IconMoreHorizontal', () => expect(mount(<IconMoreHorizontal />)).toMatchSnapshot())

test('IconMoreVertical', () => expect(mount(<IconMoreVertical />)).toMatchSnapshot())

test('IconMove', () => expect(mount(<IconMove />)).toMatchSnapshot())

test('IconMusic', () => expect(mount(<IconMusic />)).toMatchSnapshot())

test('IconNavigation', () => expect(mount(<IconNavigation />)).toMatchSnapshot())

test('IconNavigation2', () => expect(mount(<IconNavigation2 />)).toMatchSnapshot())

test('IconOctagon', () => expect(mount(<IconOctagon />)).toMatchSnapshot())

test('IconPackage', () => expect(mount(<IconPackage />)).toMatchSnapshot())

test('IconPaperclip', () => expect(mount(<IconPaperclip />)).toMatchSnapshot())

test('IconPause', () => expect(mount(<IconPause />)).toMatchSnapshot())

test('IconPauseCircle', () => expect(mount(<IconPauseCircle />)).toMatchSnapshot())

test('IconPercent', () => expect(mount(<IconPercent />)).toMatchSnapshot())

test('IconPhone', () => expect(mount(<IconPhone />)).toMatchSnapshot())

test('IconPhoneCall', () => expect(mount(<IconPhoneCall />)).toMatchSnapshot())

test('IconPhoneForwarded', () => expect(mount(<IconPhoneForwarded />)).toMatchSnapshot())

test('IconPhoneIncoming', () => expect(mount(<IconPhoneIncoming />)).toMatchSnapshot())

test('IconPhoneMissed', () => expect(mount(<IconPhoneMissed />)).toMatchSnapshot())

test('IconPhoneOff', () => expect(mount(<IconPhoneOff />)).toMatchSnapshot())

test('IconPhoneOutgoing', () => expect(mount(<IconPhoneOutgoing />)).toMatchSnapshot())

test('IconPieChart', () => expect(mount(<IconPieChart />)).toMatchSnapshot())

test('IconPlay', () => expect(mount(<IconPlay />)).toMatchSnapshot())

test('IconPlayCircle', () => expect(mount(<IconPlayCircle />)).toMatchSnapshot())

test('IconPlus', () => expect(mount(<IconPlus />)).toMatchSnapshot())

test('IconPlusCircle', () => expect(mount(<IconPlusCircle />)).toMatchSnapshot())

test('IconPlusSquare', () => expect(mount(<IconPlusSquare />)).toMatchSnapshot())

test('IconPocket', () => expect(mount(<IconPocket />)).toMatchSnapshot())

test('IconPower', () => expect(mount(<IconPower />)).toMatchSnapshot())

test('IconPrinter', () => expect(mount(<IconPrinter />)).toMatchSnapshot())

test('IconRadio', () => expect(mount(<IconRadio />)).toMatchSnapshot())

test('IconRefreshCcw', () => expect(mount(<IconRefreshCcw />)).toMatchSnapshot())

test('IconRefreshCw', () => expect(mount(<IconRefreshCw />)).toMatchSnapshot())

test('IconRepeat', () => expect(mount(<IconRepeat />)).toMatchSnapshot())

test('IconRewind', () => expect(mount(<IconRewind />)).toMatchSnapshot())

test('IconRotateCcw', () => expect(mount(<IconRotateCcw />)).toMatchSnapshot())

test('IconRotateCw', () => expect(mount(<IconRotateCw />)).toMatchSnapshot())

test('IconSave', () => expect(mount(<IconSave />)).toMatchSnapshot())

test('IconScissors', () => expect(mount(<IconScissors />)).toMatchSnapshot())

test('IconSearch', () => expect(mount(<IconSearch />)).toMatchSnapshot())

test('IconServer', () => expect(mount(<IconServer />)).toMatchSnapshot())

test('IconSettings', () => expect(mount(<IconSettings />)).toMatchSnapshot())

test('IconShare', () => expect(mount(<IconShare />)).toMatchSnapshot())

test('IconShare2', () => expect(mount(<IconShare2 />)).toMatchSnapshot())

test('IconShield', () => expect(mount(<IconShield />)).toMatchSnapshot())

test('IconShoppingCart', () => expect(mount(<IconShoppingCart />)).toMatchSnapshot())

test('IconShuffle', () => expect(mount(<IconShuffle />)).toMatchSnapshot())

test('IconSidebar', () => expect(mount(<IconSidebar />)).toMatchSnapshot())

test('IconSkipBack', () => expect(mount(<IconSkipBack />)).toMatchSnapshot())

test('IconSkipForward', () => expect(mount(<IconSkipForward />)).toMatchSnapshot())

test('IconSlack', () => expect(mount(<IconSlack />)).toMatchSnapshot())

test('IconSlash', () => expect(mount(<IconSlash />)).toMatchSnapshot())

test('IconSliders', () => expect(mount(<IconSliders />)).toMatchSnapshot())

test('IconSmartphone', () => expect(mount(<IconSmartphone />)).toMatchSnapshot())

test('IconSpeaker', () => expect(mount(<IconSpeaker />)).toMatchSnapshot())

test('IconSquare', () => expect(mount(<IconSquare />)).toMatchSnapshot())

test('IconStar', () => expect(mount(<IconStar />)).toMatchSnapshot())

test('IconStopCircle', () => expect(mount(<IconStopCircle />)).toMatchSnapshot())

test('IconSun', () => expect(mount(<IconSun />)).toMatchSnapshot())

test('IconSunrise', () => expect(mount(<IconSunrise />)).toMatchSnapshot())

test('IconSunset', () => expect(mount(<IconSunset />)).toMatchSnapshot())

test('IconTablet', () => expect(mount(<IconTablet />)).toMatchSnapshot())

test('IconTag', () => expect(mount(<IconTag />)).toMatchSnapshot())

test('IconTarget', () => expect(mount(<IconTarget />)).toMatchSnapshot())

test('IconThermometer', () => expect(mount(<IconThermometer />)).toMatchSnapshot())

test('IconThumbsDown', () => expect(mount(<IconThumbsDown />)).toMatchSnapshot())

test('IconThumbsUp', () => expect(mount(<IconThumbsUp />)).toMatchSnapshot())

test('IconToggleLeft', () => expect(mount(<IconToggleLeft />)).toMatchSnapshot())

test('IconToggleRight', () => expect(mount(<IconToggleRight />)).toMatchSnapshot())

test('IconTrash', () => expect(mount(<IconTrash />)).toMatchSnapshot())

test('IconTrash2', () => expect(mount(<IconTrash2 />)).toMatchSnapshot())

test('IconTrendingDown', () => expect(mount(<IconTrendingDown />)).toMatchSnapshot())

test('IconTrendingUp', () => expect(mount(<IconTrendingUp />)).toMatchSnapshot())

test('IconTriangle', () => expect(mount(<IconTriangle />)).toMatchSnapshot())

test('IconTv', () => expect(mount(<IconTv />)).toMatchSnapshot())

test('IconTwitter', () => expect(mount(<IconTwitter />)).toMatchSnapshot())

test('IconType', () => expect(mount(<IconType />)).toMatchSnapshot())

test('IconUmbrella', () => expect(mount(<IconUmbrella />)).toMatchSnapshot())

test('IconUnderline', () => expect(mount(<IconUnderline />)).toMatchSnapshot())

test('IconUnlock', () => expect(mount(<IconUnlock />)).toMatchSnapshot())

test('IconUpload', () => expect(mount(<IconUpload />)).toMatchSnapshot())

test('IconUploadCloud', () => expect(mount(<IconUploadCloud />)).toMatchSnapshot())

test('IconUser', () => expect(mount(<IconUser />)).toMatchSnapshot())

test('IconUserCheck', () => expect(mount(<IconUserCheck />)).toMatchSnapshot())

test('IconUserMinus', () => expect(mount(<IconUserMinus />)).toMatchSnapshot())

test('IconUserPlus', () => expect(mount(<IconUserPlus />)).toMatchSnapshot())

test('IconUserX', () => expect(mount(<IconUserX />)).toMatchSnapshot())

test('IconUsers', () => expect(mount(<IconUsers />)).toMatchSnapshot())

test('IconVideo', () => expect(mount(<IconVideo />)).toMatchSnapshot())

test('IconVideoOff', () => expect(mount(<IconVideoOff />)).toMatchSnapshot())

test('IconVoicemail', () => expect(mount(<IconVoicemail />)).toMatchSnapshot())

test('IconVolume', () => expect(mount(<IconVolume />)).toMatchSnapshot())

test('IconVolume1', () => expect(mount(<IconVolume1 />)).toMatchSnapshot())

test('IconVolume2', () => expect(mount(<IconVolume2 />)).toMatchSnapshot())

test('IconVolumeX', () => expect(mount(<IconVolumeX />)).toMatchSnapshot())

test('IconWatch', () => expect(mount(<IconWatch />)).toMatchSnapshot())

test('IconWifi', () => expect(mount(<IconWifi />)).toMatchSnapshot())

test('IconWifiOff', () => expect(mount(<IconWifiOff />)).toMatchSnapshot())

test('IconWind', () => expect(mount(<IconWind />)).toMatchSnapshot())

test('IconX', () => expect(mount(<IconX />)).toMatchSnapshot())

test('IconXCircle', () => expect(mount(<IconXCircle />)).toMatchSnapshot())

test('IconXSquare', () => expect(mount(<IconXSquare />)).toMatchSnapshot())

test('IconZap', () => expect(mount(<IconZap />)).toMatchSnapshot())

test('IconZoomIn', () => expect(mount(<IconZoomIn />)).toMatchSnapshot())

test('IconZoomOut', () => expect(mount(<IconZoomOut />)).toMatchSnapshot())
