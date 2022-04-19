---
title: Windows 10 Tweaks To Make It Bearable
---

## Step 1: Remove All Bundled Apps (except the Store)

In an admin powershell enter:

```powershell
Get-AppxPackage -AllUsers | where-object {$_.name –notlike "*store*"} | Remove-AppxPackage
```

## Step 2: Disable Telemetry

### Method #1 - regedit

Create a new DWORD (32 bit) in `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\DataCollection` named `AllowTelemetry` with a value of `0`.

### Method #2 - services.msc

Set Connected User Experiences and Telemetry's startup type to Disabled.

## Step 3: If I Have Access To The Group Policy Editor

### Cortana and Windows Search

In `(Computer Configuration\Administrative Templates\Windows Components\Search)`:

- Disable “Allow Cortana”.
- Disable “Prevent automatically adding shared folders to the Windows Search index”.
- Enable “Don’t search the web or display web results in search”.

### Data Collection and Preview Builds

In `(Computer Configuration\Administrative Templates\Windows Components\Data Collection and Preview Builds)`:

- Enable "Allow Telemetry" and set it to "0 - Off [Enterprise Only]".
- Enable "Do not show feedback notifications".

### WiFi Sense

In `(Computer Configuration\Administrative Templates\Network\WLAN Service\WLAN Settings\)`:

- Disable "Allow Windows to automatically connect to suggested open hotspots, to networks shared by contacts, and to hotspots offering paid services".

### Microsoft Data Collection

In `(Computer Configuration\Administrative Templates\Windows Components\Application Compatibility)`:

- Enable "Turn off Application Telemetry".
- Enable "Turn off Inventory Collector".

### Microsoft Customer Experience

- Enable "Turn off Microsoft consumer experiences".

## Step 4: Registry Hacks

- Create a new DWORD (32-bit) in `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\Current\Version\Explorer\Advanced` named `LastActiveClick` with a value of `1`.
- Create a new DWORD (32-bit) in `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\Personalization` named `NoLockScreen` with a value of `1`.
- Create a new DWORD (32-bit) in `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\TimeZoneInformation` named `RealTimeIsUniversal` with a value of `1`.
  - This makes Windows use UTC which is useful when dual-booting MacOS or Linux.
- Create a new DWORD (32-bit) in `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\System` named `DisableLogonBackgroundImage` with a value of `1`.
- Create a new DWORD (32-bit) in `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\Windows Error Reporting` named `Disabled` with a value of `1`.
- Create a new DWORD (32-bit) in `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced` named `LaunchTo` with a value of `1`.
  - Opens File Explorer on This PC by default.
- Create a new DWORD (32-bit) in `HKEY_CURRENT_USER\Control Panel\Desktop` named `JPEGImportQuality` with a value of `100`.
- Create a new DWORD (32-bit) in `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\Windows Search]` named `AllowCortana` with a value of `0`.
- Create a new DWORD (32-bit) in `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\Windows Search]` named `DisableWebSearch` with a value of `1`.
- Create a new DWORD (32-bit) in `HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Windows\Explorer` named `DisableSearchBoxSuggestions` with a value of `1`.

## Wrapping up

You can check [this](https://github.com/bmrf/tron) and [that](https://github.com/W4RH4WK/Debloat-Windows-10) out as well.
