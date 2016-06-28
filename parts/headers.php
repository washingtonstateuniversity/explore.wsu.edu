<nav>
  <?php
   $spine_site_args = array(
  'theme_location'  => 'site',
  'menu'            => 'main-menu',
  'container'       => false,
  'container_class' => false,
  'container_id'    => false,
  'menu_class'      => null,
  'menu_id'         => null,
  'items_wrap'      => '<ul>%3$s</ul>',
  'depth'           => 2,
);
wp_nav_menu( $spine_site_args ); ?>
</nav>
