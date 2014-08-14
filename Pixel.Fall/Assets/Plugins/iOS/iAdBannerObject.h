//
//  iAdBannerObject.h
//  Unity-iPhone
//
//  Created by lacost on 2/11/14.
//
//

#import <Foundation/Foundation.h>
#import <iAd/iAd.h>
#if UNITY_VERSION < 450
#include "iPhone_View.h"
#endif

@interface iAdBannerObject : NSObject<ADBannerViewDelegate>

@property (strong)  ADBannerView *bannerView;
@property (strong)  NSNumber *bid;

- (void) InitBanner:(int) bannerId;
- (void) CreateBanner:(int) gravity bannerId: (int) bannerId;
- (void) CreateBannerAdPos:(int) x y: (int) y  bannerId: (int) bannerId;


- (void) ShowAd;
- (void) HideAd;

@end
